import {useEffect,useState} from 'react'

function LeetcodeRating() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://leetcode-api-1.onrender.com/nissankumar/contest');
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
            console.log(data);
        }
    }, [loading])

  return (
    <div className='flex lg:w-[45%] md:w-[48%] bg-light-slate/20 h-40 md:h-48 justify-around  rounded-lg flex-col'>
        
        <div className='flex justify-around'>

            <div className='flex flex-col'>
                <div>Contest Rating</div>
                <div className='text-2xl md:text-3xl'>{loading === false ? Math.floor(data.contestRating) : "Loading"}</div>
            </div>

            <div className='flex items-center'>
                <img src={`/images/leetcode-${loading === false ? data.contestBadges.name : null}-badge.gif`} className='w-14 h-14 mr-2'></img>
                <div className='flex flex-col'>
                    <div>Level</div>
                    <div className='text-2xl md:text-3xl'>{loading === false ? data.contestBadges.name : "Loading"}</div>
                </div>
            </div>
        </div>

        <div className='flex justify-around'>
            <div className='flex flex-col'>
                <div>Global Ranking</div>
                <div className='text-2xl md:text-3xl'>{loading === false ? data.contestGlobalRanking : "Loading"} <span className='text-xs md:text-sm'>/{ loading === false ? data.totalParticipants :"Loading"}</span></div>
            </div>

            <div className='flex flex-col'>
                <div>Top</div>
                <div className='text-2xl md:text-3xl'>{loading === false ? data.contestTopPercentage : "Loading"}%</div>
            </div>
        </div>

    </div>
  )
}

export default LeetcodeRating