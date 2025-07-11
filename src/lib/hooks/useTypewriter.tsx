import { useEffect, useState } from 'react';

interface PropsType {
  text: string;
  speed?: number;
  loop?: boolean;
  delayBetweenLoop?: number;
}

/*********************************************************************************
 * 문자열 타이핑 효과를 위한 훅
 * 문자열을 한 글자씩 추가하며 타이핑 효과를 줍니다.
 * 옵션으로 속도, 반복 여부, 반복 사이 딜레이를 설정할 수 있습니다.
 *
 * @param {PropsType} props - 타이핑 효과 설정
 * @param {string} props.text - 타이핑할 문자열
 * @param {number} [props.speed=50] - 한 글자 추가 시간 (밀리초)
 *********************************************************************************/
export const useTypewriter = ({
  text,
  speed = 50,
  loop = false,
  delayBetweenLoop = 1000,
}: PropsType) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
    } else if (loop) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setIndex(0);
      }, delayBetweenLoop);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [index, speed, text, loop, delayBetweenLoop]);

  return { currentText };
};
