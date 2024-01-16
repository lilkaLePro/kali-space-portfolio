import NavLinks from "../ui/nav-link"

export const Header = () => {

return <div className=" w-full pt-7 md:mt-0">
    <div className="w-full md:max-w-3xl px-4 ">
    <div className="w-full flex md:flex-col md:justify-center">
        {/* <p className="w-10 h-10 flex justify-center items-center border rounded-full">affer</p> */}
        <NavLinks  />
    </div>
    
    </div>
    </div>

}
// flex flex-col gap-5