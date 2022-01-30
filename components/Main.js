const Main = ({ children }) => {
    return (
        <main className="antialiased w-full text-gray-700 px-1 flex">
            <div className="max-w-screen-lg mx-auto">
                { children }
            </div>
        </main>
    )
}

export default Main;