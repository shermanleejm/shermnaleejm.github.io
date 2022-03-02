import { Button, CircularProgress, Typography } from '@mui/material';
import 'dexie-export-import';
import { useEffect, useState } from 'react';
import { MTGDBProps, storeCard, ToasterSeverityEnum } from '.';
import { CardsTableColumns, CardsTableType, CustomImageUris } from '../../database';
import { CSVLink } from 'react-csv';
import axios, { AxiosResponse } from 'axios';
import { ScryfallDataType } from './interfaces';
import sample from '../../assets/War_of_the_spark.json';
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';

const NetExports = (props: MTGDBProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUpdateCard, setCurrentUpdateCard] = useState('');
  const [cardArr, setCardArr] = useState<CardsTableType[]>([]);

  const db = useSelector((state: State) => state.database);

  useEffect(() => {
    async function init() {
      setCardArr(await db.cards.toArray());
    }

    init();
  }, []);

  const handleCsv = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = (ee: any) => {
      let json = '';
      try {
        json = JSON.parse(ee.target.result);
      } catch (err) {
        json = ee.target.result;
      }
      console.log(json);
    };
  };

  const handleJsonAndUpdate = async (e: any) => {
    setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = async (ee: any) => {
      let json: [CardsTableType];
      try {
        json = JSON.parse(ee.target.result);
      } catch (err) {
        props.toaster('Unable to process.', ToasterSeverityEnum.ERROR);
        return '';
      }

      for (const card of json) {
        let check = await db.cards
          .where({ scryfall_id: card.scryfall_id || '0' })
          .first();
        setCurrentUpdateCard(card.name);
        let resp: AxiosResponse<any, any>;
        if (check?.collector_number !== undefined && check?.set !== undefined) {
          resp = await axios.get(
            `https://api.scryfall.com/cards/${check.set}/${check.collector_number}`
          );
        } else {
          resp = await axios.get('https://api.scryfall.com/cards/search?q=' + card.name);
        }

        let newCard: ScryfallDataType = resp.data.data[0];
        for (let c of resp.data.data) {
          if (c.name === card.name) {
            newCard = c;
          }
        }

        if (check !== undefined) {
          db.cards.delete(check.id || -1);
        }

        storeCard(db, newCard, card.tags, card.quantity);
      }

      setIsLoading(false);
    };
  };

  const handleJson = async (e: any) => {
    setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = async (ee: any) => {
      let json: [CardsTableType];
      try {
        json = JSON.parse(ee.target.result);
      } catch (err) {
        props.toaster('Unable to process.', ToasterSeverityEnum.ERROR);
        return '';
      }
      let added = 0;
      for (const card of json) {
        let originalCard = await db.cards
          .where({ scryfall_id: card.scryfall_id || '0' })
          .first();
        setCurrentUpdateCard(card.name);
        if (originalCard === undefined) {
          await db.cards.put(card);
        } else {
          if (card.id !== undefined && originalCard !== undefined) {
            await db.cards.update(card.id, {
              tags: Array.from(new Set([...card.tags, ...originalCard.tags])),
            });
          }
        }
        added++;
      }
      console.log('Added: ', added);
      console.log('Total: ', (await db.cards.toArray()).length);
      setIsLoading(false);
    };
  };

  const CSVDownload = () => {
    const options = {
      data: cardArr,
      headers: CardsTableColumns,
      filename: `MTGDB_dump_${Date.now()}.csv`,
      target: '_blank',
    };
    return (
      <CSVLink style={{ all: 'unset' }} {...options}>
        export to csv
      </CSVLink>
    );
  };

  async function sampleJson() {
    setIsLoading(true);

    for (const card of sample) {
      let exists: boolean = true;
      await db.cards
        .where({ name: card.name })
        .first()
        .then((res) => (exists = res !== undefined))
        .catch((err) => console.error(err));

      if (!exists) {
        setCurrentUpdateCard(card.name);
        await db.cards
          .put(card)
          .then(() => {})
          .catch((err) => console.error(err));
      }
    }

    setIsLoading(false);
  }

  return isLoading ? (
    <div style={{ margin: 'auto' }}>
      <CircularProgress />
      <Typography>Processing {currentUpdateCard} ...</Typography>
    </div>
  ) : (
    <div style={{ width: '80vw', margin: 'auto', textAlign: 'center' }}>
      <Button fullWidth disabled>
        <CSVDownload></CSVDownload>
      </Button>

      <input
        type="file"
        accept=".csv"
        onChange={handleCsv}
        style={{ display: 'none' }}
        id="upload-db-csv"
      />
      <label htmlFor="upload-db-csv">
        <Button component="span" fullWidth disabled>
          upload csv
        </Button>
      </label>

      <Button
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(cardArr)
        )}`}
        download={`MTGDB_dump_${Date.now()}.json`}
      >
        export json
      </Button>

      <input
        type="file"
        accept="application/json"
        onChange={handleJson}
        style={{ display: 'none' }}
        id="upload-db-json"
      />
      <label htmlFor="upload-db-json">
        <Button component="span" fullWidth>
          upload json
        </Button>
      </label>

      <input
        type="file"
        accept="application/json"
        onChange={handleJsonAndUpdate}
        style={{ display: 'none' }}
        id="upload-db-json-update"
      />
      <label htmlFor="upload-db-json-update">
        <Button component="span" fullWidth>
          upload json and update
        </Button>
      </label>

      <Button onClick={() => sampleJson()}>load sample json (testing)</Button>
    </div>
  );
};

export default NetExports;
