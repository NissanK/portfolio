import {React,useRef,useEffect,useState,useContext, createContext} from 'react'
import LeetcodeQuestionType from './LeetcodeQuestionType';

function Leetcode() {
    const LeetcodeCircleRef = useRef(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/nissankumar');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } 
        catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();

    }, [])
      
    useEffect(() => {
      if(loading === false){
        const ratioTotal = (data.totalSolved/data.totalQuestions)*360;
        LeetcodeCircleRef.current.style.backgroundImage = `linear-gradient(${90 + ratioTotal}deg, transparent 50%, #0a192f 50%), linear-gradient(90deg, #0a192f 50%, transparent 50%)`;
      }
    }, [loading])

  return (
    <div className='flex lg:w-[45%] md:w-[48%]  bg-light-slate/[0.05] text-lightest-slate h-40 md:h-48 justify-around items-center rounded-lg md:mb-0 mb-4'>
        <div className='rounded-full lg:h-[7.5rem] lg:w-[7.5rem] md:w-[5.5rem] md:h-[5.5rem] h-[6.5rem] w-[6.5rem] bg-light-slate
        flex items-center justify-center ' ref={LeetcodeCircleRef}>
            <div className='rounded-full lg:h-[7rem] lg:w-[7rem] md:w-[5rem] md:h-[5rem] h-[6rem] w-[6rem] bg-light-global-bg text-light-slate flex flex-col justify-center items-center'>
                <div className=' text-2xl lg:text-3xl'>{loading === false ? data.totalSolved : "loading"}</div>
                <div>Solved</div>
            </div>
        </div>

        {loading === false ?
          <div className='flex flex-col justify-center items-center'>
              <LeetcodeQuestionType type={"Easy"} totalSolved={data.easySolved} totalQuestions={data.totalEasy}></LeetcodeQuestionType>
              <LeetcodeQuestionType type={"Medium"} totalSolved={data.mediumSolved} totalQuestions={data.totalMedium}></LeetcodeQuestionType>
              <LeetcodeQuestionType type={"Hard"} totalSolved={data.hardSolved} totalQuestions={data.totalHard}></LeetcodeQuestionType>
          </div>
        : null}
    </div>
  )
}

export default Leetcode