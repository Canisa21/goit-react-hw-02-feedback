export const Statistics=({ good, neutral, bad, value, result})=>{
    result = 0;

    if (good !== 0) {
        result = (good / value) * 100;
        result = result.toFixed(2)
    }

    if (value === 0) {
        return (
            <div>
                There is no feedback
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad:{bad}</p>
                <p>total:{value}</p>
                <p>positive feedback: {result}%</p>
            </div>
        )
    }
}