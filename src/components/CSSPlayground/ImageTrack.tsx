import styled from '@emotion/styled';
import { useRef } from 'react';
import _ from 'lodash';
import images from './imageTrackImages';

export default function ImageTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement[]>([]);

  function handleScroll() {
    const maxWidth =
      (trackRef.current?.scrollWidth || 0) - (trackRef.current?.offsetWidth || 0);
    const currWidth = trackRef.current?.scrollLeft || 0;
    const percentage = Math.round((currWidth / maxWidth) * 100);
    imgRef.current.map(
      (el) => (el.style.objectPosition = `${100 - Math.min(percentage, 100)}% center`)
    );
  }

  const BackgroundDiv = styled.div`
    height: 95%;
    width: 100vw;
    margin: 0rem;
    position: absolute;
  `;
  const SmallImageTrack = styled.div`
    display: flex;
    gap: 4vmin;
    position: sticky;
    padding: 0% 50%;
    // left: 100%;
    top: 50%;
    transform: translate(0%, -50%);
    animation: transform 1200 forwards;
    overflow-x: scroll;
    user-select: none;
  `;
  const CustomImg = styled.img`
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 100% center;
    animation: object-position 1200 forwards;
  `;

  return (
    <BackgroundDiv>
      <SmallImageTrack ref={trackRef} onScroll={_.throttle(handleScroll, 5)}>
        {images.map((path, index) => (
          <CustomImg
            src={path}
            key={index}
            ref={(el) => el && (imgRef.current[index] = el)}
          />
        ))}
      </SmallImageTrack>
    </BackgroundDiv>
  );
}
