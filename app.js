class App extends React.Component {
    state = { activeTab: 'ProjectXIV' }; // Default active tab

    setActiveTab = (tabName) => {
        this.setState({ activeTab: tabName });
    };

    renderContent() {
        const { activeTab } = this.state;
    
        switch (activeTab) {
            case 'ProjectXIV':
                return (
                    <>
                        <table className="layout-table">
                            <tbody>
                                <tr>
                                    <td width='700px'>
                                        <div className="video-frame">
                                            <div className="video-responsive">
                                                <iframe
                                                    width="600"
                                                    height="338"
                                                    src="https://www.youtube.com/embed/kZVZuW0VA4k"
                                                    title="Hello World"
                                                    frameBorder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen={true}>
                                                </iframe>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-box">
                                            <h3>Llana Ivanovich Grossman Crook</h3>
                                            <span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}>Bio:  </span>
                                            <p>Llana formed an obsession taking apart watches and clocks at 7 years old. Blessed to have been born to a family with an unusually tech-inclined uncle, Llana was a proficient Commodore64 user by the time she was eight years old circa 1985, playing with programming in BASIC to make the device do interesting things. Her expanding relationship with technology had taken hold, resulting in her learning HTML the moment the internet became accessible, and moving on to the world of hacking. By the time Llana graduated high school in 1996, she was known in her family for her free computer and game console repair assistance, warranties be damned!</p>
                                            <p>Many years later, Llana followed her love of technology from computers, to hacking, to information security and helping people. Professionally, she started with writing, then project managing, dabbling in marketing as she went, and eventually became a product manager. She cofounded two successful startups in the information security sphere. Now Llana is ready for her next big professional iteration, software architecture and engineering.</p>
                                            <p>Find her at <a href="https://twitter.com/Llana">@Llana on X.com</a></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Project Links moved here */}
                        <div className="text-box" style={{marginTop: '20px'}}>
                            <h3>Project Links</h3>
                            <ul>
                                <li><a href="/pacmen">Pacmen</a></li>
                                <li><a href="/bustracker">Bus Tracker</a></li>
                                <li><a href="/eyes">Eyes</a></li>
                                <li><a href="https://github.com/ProjectXIV/form_starter">Build a Formik Form</a></li>
                            </ul>
                        </div>
                    </>
                );
            case 'Connect':
                return <p> <a href="https://twitter.com/Llana">@Llana on X.com</a></p>;
            default:
                return <p>Welcome to our website!</p>;
        }
    }
    
    render() {
        const { activeTab } = this.state;

        return (
            <div>
                <div className="dashboard-header">Dashboard</div>
                <nav>
                    <ul className="nav-tabs">
                        <li className={activeTab === 'ProjectXIV' ? 'active' : ''} onClick={() => this.setActiveTab('ProjectXIV')}>ProjectXIV</li>
                        <li className={activeTab === 'Connect' ? 'active' : ''} onClick={() => this.setActiveTab('Connect')}>Connect</li>
                    </ul>
                </nav>
                <div className="content">
                    <h2>a little something I call ProjectXIV</h2>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
