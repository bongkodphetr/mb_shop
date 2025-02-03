import Sidebar from './sidebar'
export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='flex p-5 bg-gray-200 w-full h-screen '>
                {children}
            </div>
        </div>
    )
}