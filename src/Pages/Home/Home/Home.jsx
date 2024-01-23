import PageTitle from "../../Shared/PageTitle/PageTitle";
import CustomerFocus from "../CustomerFocus/CustomerFocus";
import DepartmentalGoal from "../DepartmentalGoal/DepartmentalGoal";
import Footer from "../Footer/Footer";
import Objective from "../Objective/Objective";
import ForBangla from "../PolicyTable/ForBangla/ForBangla";
import ForEnglish from "../PolicyTable/ForEnglish/ForEnglish";
import { Carousel2 } from "../slider/Slider";

const Home = () => {
    return (
        <div>

            <div><Carousel2></Carousel2></div>

            <PageTitle title={'Quality Policy'}></PageTitle>
            <div id="policy" className="md:flex justify-between gap-5">
                <ForEnglish></ForEnglish>
                <ForBangla></ForBangla>
            </div>

            <PageTitle title={'Objective & Customer Focus'}></PageTitle>

            <div id="objective" className="flex flex-col md:flex-row justify-center md:gap-10">
                <Objective></Objective>
                <CustomerFocus></CustomerFocus>
            </div>

            <PageTitle title={'Departmental Goal'}></PageTitle>

            <DepartmentalGoal></DepartmentalGoal>
            <Footer></Footer>
        </div>
    );
};

export default Home;