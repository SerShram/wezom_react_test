import "./Statistic.scss"

const Statistic = ({users}) => {

    let males = 0;
    let females = 0;
    let indeterminate = 0;
    let nationalities = {};

    for (let i = 0; i < users.length; i++) {
        (users[i].gender === 'male')
            ? males++
            : (users[i].gender === 'female')
                ? females++
                : indeterminate++;

        if (typeof nationalities[users[i].nat] === 'undefined') {
            nationalities[users[i].nat] = 1;
        } else {
            nationalities[users[i].nat]++;
        }
    }

    const predominate = (males > females)
        ? 'Men predominate'
        : (males < females)
            ? 'Women predominate'
            : 'Equally';

    const keys = Object.keys(nationalities);

    return (
        <div className="stat">
            <div className="stat__wrap">
                <h2>Statistic</h2>
                <div className="stat__total-stats">
                    <div className="stat__item-flex">
                        <div className="stat__item">
                            <div className="stat__title">Collection size</div>
                            <div className="stat__content">{users.length}</div>
                        </div>
                    </div>
                    <div className="stat__item-flex">
                        <div className="stat__items">
                            <div className="stat__item">
                                <div className="stat__title">Males</div>
                                <div className="stat__content">{males}</div>
                            </div>
                            <div className="stat__item">
                                <div className="stat__title">Females</div>
                                <div className="stat__content">{females}</div>
                            </div>
                            <div className="stat__item">
                                <div className="stat__title">Indeterminate</div>
                                <div className="stat__content">{indeterminate}</div>
                            </div>
                        </div>
                        <span className="stat__dominate">{predominate}</span>
                    </div>
                </div>
                <div className="stat__details">
                    <div className="stat__title">Nationalities</div>
                    <div className="stat__nat-flex">
                        {
                            keys.map(key => <div key={key}>
                                <span>{key}:</span> {nationalities[key]} contacts
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic;