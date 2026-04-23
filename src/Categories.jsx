import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
const Categories = [
    {
        id:1,
        name:"All",
        icon : <TiThSmallOutline className="h-15 w-15 text-green-600" />
    },
    {
        id:2,
        name:"breakfast",
        icon : <MdOutlineFreeBreakfast className="h-15 w-15 text-green-600" />
    },
    {
        id:3,
        name:"soups",
        icon : <TbSoup className="h-15 w-15 text-green-600"/>
    },
    {
        id:4,
        name:"pasta",
        icon : <CiBowlNoodles className="h-15 w-15 text-green-600"/>
    },
    {
        id:5,
        name:"main_course",
        icon : <MdOutlineFoodBank className="h-15 w-15 text-green-600" />
    },
    {
        id:6,
        name:"pizza",
        icon :<GiFullPizza  className="h-15 w-15 text-green-600"/>
    },
    {
        id:7,
        name:"burger",
        icon :<FaHamburger className="h-15 w-15 text-green-600" />
    },
]
export default Categories;