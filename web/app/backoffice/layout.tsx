import Sidebar from './sidebar'
export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='flex '>
                {children}
            </div>
        </div>
    )
}