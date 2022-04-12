
import experts1 from '../../../images/experts/expert-1.jpg'
import experts2 from '../../../images/experts/expert-2.jpg'
import experts3 from '../../../images/experts/expert-3.jpg'
import experts4 from '../../../images/experts/expert-4.jpg'
import experts5 from '../../../images/experts/expert-5.jpg'
import experts6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
const Experts = () => {
   const experts =[
    {
        "id": 1,
        "name": "will smith",
        "img": experts1
    },
    {
        "id": 2,
        "name": "will smith",
        "img": experts2
    },
    {
        "id": 3,
        "name": "will smith",
        "img": experts3
    },
    {
        "id": 4,
        "name": "will smith",
        "img": experts4
    },
    {
        "id": 5,
        "name": "will smith",
        "img": experts5
    },
    {
        "id": 6,
        "name": "will smith",
        "img": experts6
    },
    
   ];


    return (
        <div id='experts' className='container'>
            <h1 className='text-center text-primary mt-5 mb-5'>Our Experts : {experts.length}</h1>
            <div className="row">
                {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;