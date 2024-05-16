import css from "./feedback.module.css"

export const Feedback = ({ onClicBad, onClicNeutral, onClickGood, totalClick }) => {
    return (
        <>
            <div>
                <p>Please leave feedback</p>
            </div>
            <div>
               <div><button className={css.buttonDecor} onClick={() => { onClickGood(); totalClick(); }}>Good</button></div> 
                <div><button className={css.buttonDecor} onClick={() => {onClicNeutral(); totalClick();}}>Neutral</button></div>
               <div><button className={css.buttonDecor} onClick={() => { onClicBad(); totalClick(); }}>Bad</button></div> 
            </div>
    </>
)
}