import {useEffect,useState,React} from 'react'
const crypto = require('crypto');


function CodeforcesProblemsList() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [problemsArray, setProblemsArray] = useState([
        {"range" : "800-1200", "count" :"loading"},
        {"range" : "1200-1300", "count" : "loading"},
        {"range" : "1400-1500", "count" : "loading"},
        {"range" : "1600-1800", "count" : "loading"},
        {"range" : "1900-2000", "count" : "loading"},
        {"range" : "2100-2300", "count" : "loading"},
    ])
    const [totalProblems, setTotalProblems] = useState(0)

    const problemRatingMap = new Map();
    const problemSet = new Set();
    const verdictSet = new Set();


    useEffect(() => {

        function generateSHA512(input) {
            const hash = crypto.createHash('sha512');
            hash.update(input);
            return hash.digest('hex');
        }

        const apikey = process.env.NEXT_PUBLIC_CODEFORCES_API_KEY;
        const secretkey = process.env.NEXT_PUBLIC_CODEFORCES_SECRET_KEY

        const timenow = Math.floor(Date.now()/1000);
        const stringSHA = `123456/user.status?apiKey=${apikey}&handle=nissank&time=${timenow}#${secretkey}`;
        console.log(stringSHA);
        console.log(timenow);
        const generatedSHA = generateSHA512(stringSHA);

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://codeforces.com/api/user.status?handle=nissank&apiKey=${apikey}&time=${timenow}&apiSig=123456${generatedSHA}`
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData.result);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        if(data !== null){
            var sz = data.length;
            console.log(sz);

            for(var i = 8;i<31;i++){
                problemRatingMap.set(i*100,0);
            }
            problemRatingMap.set("undefined",0);

            for(var i = 0;i<sz;i++){
                // problemRatingMap
                var problemId = data[i].problem.contestId + data[i].problem.name;
                if(data[i].verdict === "OK" && !problemSet.has(problemId)){
                    problemSet.add(problemId);
                    problemRatingMap.set(data[i].problem.rating , problemRatingMap.get(data[i].problem.rating) + 1);
                }
            }

            console.log(problemSet.size);
            console.log(verdictSet);

            const problems800 = problemRatingMap.get(800) + problemRatingMap.get(900) + problemRatingMap.get(1000) + problemRatingMap.get(1100);
            const problems1200 = problemRatingMap.get(1200) + problemRatingMap.get(1300);
            const problems1400 = problemRatingMap.get(1400) + problemRatingMap.get(1500);
            const problems1600 = problemRatingMap.get(1600) + problemRatingMap.get(1700) + problemRatingMap.get(1800);
            const problems1900 = problemRatingMap.get(1900) + problemRatingMap.get(2000);
            const problems2100 = problemRatingMap.get(2100) + problemRatingMap.get(2200) + problemRatingMap.get(2300);

            const newProblemsArray = [
                {"range" : "800-1200", "count" : problems800},
                {"range" : "1200-1300", "count" : problems1200},
                {"range" : "1400-1500", "count" : problems1400},
                {"range" : "1600-1800", "count" : problems1600},
                {"range" : "1900-2000", "count" : problems1900},
                {"range" : "2100-2300", "count" : problems2100}
            ]

            setProblemsArray(newProblemsArray);
            setTotalProblems(problemSet.size);
        }

    },[loading])

  return (
    <div className='flex lg:w-[45%] md:w-[48%] w-full bg-light-slate/[0.05] text-lightest-slate h-40 md:h-48 rounded-lg justify-evenly flex-col'>
        <div className='text-center'>Total Problems Solved : {totalProblems}</div>
        <div className='flex flex-col items-center justify-center w-full gap-2'>
            <div className='text-center'>Range of Problems Solved</div>
            <div className='flex-row flex flex-wrap w-full justify-center gap-2'>
                {problemsArray.map(problemRange => (
                    <div className=' w-[48%] text-center'>{problemRange.range} : {problemRange.count}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CodeforcesProblemsList