jsx
const { useState } = React;

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
            {/* Header */}
            <header className={`py-6 px-4 shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        Reactify Magic Wand
                    </h1>
                    <button 
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                        <i data-feather={darkMode ? "sun" : "moon"}></i>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">
                <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h2 className="text-2xl font-bold mb-6">Welcome to React Magic!</h2>
                    <p className="mb-4">
                        This is a simple React component example rendered with JSX and Babel standalone.
                    </p>
                    <div className="flex space-x-4">
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}>
                            <i data-feather="zap" className="mr-2"></i> Action
                        </button>
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                            <i data-feather="info" className="mr-2"></i> Info
                        </button>
                    </div>
                </div>

                <div className={`mt-8 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <h3 className="text-xl font-semibold mb-4">Feature Cards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={`p-6 rounded-lg transition-all hover:shadow-xl ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'}`}>
                                <div className="flex items-center mb-3">
                                    <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-600 text-purple-400' : 'bg-blue-100 text-blue-600'}`}>
                                        <i data-feather={item === 1 ? "code" : item === 2 ? "feather" : "cpu"}></i>
                                    </div>
                                    <h4 className="ml-3 font-medium">
                                        {item === 1 ? "JSX Power" : item === 2 ? "Feather Icons" : "React Magic"}
                                    </h4>
                                </div>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    {item === 1 
                                        ? "Harness the power of JSX for declarative UI." 
                                        : item === 2 
                                        ? "Beautiful feather icons integration included." 
                                        : "React components with state management."}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className={`py-6 px-4 mt-12 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                <div className="container mx-auto text-center">
                    <p>© 2023 Reactify Magic Wand. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

</html>