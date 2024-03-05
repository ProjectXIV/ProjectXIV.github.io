class App extends React.Component {
    state = { activeTab: 'ProjectXIV' }; // Default active tab

    setActiveTab = (tabName) => {
        this.setState({ activeTab: tabName });
    };

    renderContent() {
        const { activeTab } = this.state;

        if (activeTab === 'ProjectXIV') {
            return (
                <React.Fragment>
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
                                        {/* Biography and details here */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-box" style={{marginTop: '20px'}}>
                        <h3>Project Links</h3>
                        <div>
                            <h3>Pacmen</h3>
                            <iframe src="/pacmen/index.html" title="Pacmen Project" width="100%" height="400"></iframe>
                        </div>
                        <div>
                            <h3>Bus Tracker</h3>
                            <iframe src="/bustracker/index.html" title="Bus Tracker Project" width="100%" height="400"></iframe>
                        </div>
                        <div>
                            <h3>Eyes</h3>
                            <iframe src="/eyes/index.html" title="Eyes Project" width="100%" height="400"></iframe>
                        </div>
                        <div>
                            <h3>Build a Formik Form</h3>
                            <p><a href="https://github.com/ProjectXIV/form_starter">Visit on GitHub</a></p>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        else if (activeTab === 'Connect') {
            return <p><a href="https://twitter.com/Llana">@Llana on X.com</a></p>;
        }
        else {
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
