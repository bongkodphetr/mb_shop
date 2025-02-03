import Link from "next/link"
export default function Sidebar() {
    return(
        <div className="bg-teal-600 h-screen w-64">
            <div className="p-5 bg-teal-700 text-xl font-bold">
                <h1 className="text-white">Menu</h1>
            </div>
            <div className="p-5 flex flex-col gap-3 text-white">
                <div>
                    <Link href="/backoffice/dashboard">
                    <i className="fa fa-tachometer-alt mr-2 w-[25px]"></i>
                    Dashboard
                    </Link>
                </div>
                
                <div>
                    <Link href="/backoffice/buy">
                    <i className="fa fa-shopping-cart mr-2 w-[25px]"></i>
                    ซื้อสินค้า
                    </Link>
                </div>
                
                <div>
                    <Link href="/backoffice/sell">
                    <i className="fa fa-dollar-sign mr-2 w-[25px]"></i>
                    ขายสินค้า
                    </Link>
                </div>
                
                <div>
                    <Link href="/backoffice/repair">
                    <i className="fa fa-user-alt mr-2 w-[25px]"></i>
                    รับซ่อม
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/company">
                    <i className="fa fa-tachometer-alt mr-2 w-[25px] "></i>
                    ข้อมูลร้าน
                    </Link>
                </div>
                <div>
                    <Link href="/backoffice/company">
                    <i className="fa fa-users mr-2 w-[25px] "></i>
                    ผู้ใช้งาน
                    </Link>
                </div>
            </div>
        </div>
    )
}