export default function Sidebar() {
    return(
        <div className="bg-teal-600 h-screen w-64">
            <div className="p-5 bg-teal-700 text-xl font-bold">
                <h1 className="text-white">Menu</h1>
            </div>
            <div className="p-5 flex flex-col gap-3 text-white">
                <h1>Dashboard</h1>
                <h1>Company</h1>
                <h1>User</h1>
            </div>
        </div>
    )
}