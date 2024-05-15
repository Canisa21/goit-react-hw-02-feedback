import css from "./feedback.module.css"

export const Feedback = ({ onClicBad, onClicNeutral, onClickGood, totalClick }) => {
    return (
        <>
            <div>
                <p>Please leave feedback</p>
            </div>
            <div>
                <button className={css.buttonV} onClick={() => { onClickGood(); totalClick(); }}>Good</button>
                <button className={css.buttonV} onClick={() => {onClicNeutral(); totalClick();}}>Neutral</button>
                <button className={css.buttonV} onClick={() => {onClicBad(); totalClick(); }}>Bad</button>
            </div>
    </>
)
}