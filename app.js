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
                                        <br />
                                        <p>At age twenty-one, Ms. Ivanovich Grossman Crook worked her first paid job coordinating Y2K remediation for the IT department of one of the nation's largest biotech companies, Amgen Inc. About a year later, life brought Llana to Silicon Valley where she worked in the Video Game Industry for a bit, and eventually co-founded her first information security company with her husband and their best friend.</p>
                                        <br />
                                        <p>WhiteHat Security, Inc. was a steady success that grew over time. Llana left her official responsibility of content management and marketing at the company to raise and homeschool 3 children, but was never far from the pulse of the company. After about 10 years, WhiteHat's founders moved on to other projects. The company was acquired by a Japanese telecom company, and became the founding team's first official win.</p>
                                        <br />
                                        <p>Llana never stopped growing and expanding in tech. During her time as a housewife, she grew social media groups on MySpace and Facebook for fun. Several topping 50,000 followers.</p>
                                        <br />
                                        <p>In 2016 Ms. Ivanovich Grossman Crook set out to co-found another company with the same team. Her role this time was Product Manager, expanding the scope of her professional responsibilities. Over the next two years, she led a skeleton crew building the front end for an incredible product. A web asset management service called Bit Discovery was born. Within a few short years, Bit Discovery was acquired by an information security company called Teneble. With that win, it was time for a personal break with work.</p>
                                        <br />
                                        <p>Upon Llana's reemergence, she decided programming firsthand would be a powerful skill to add to her toolkit of professional work, as well as social marketing hobbies. That journey is presently ongoing.</p>
                                    </div>
                                    <p><ul>
                            <li><a href="/pacmen">Pacmen</a></li>
                            <li><a href="/bustracker">Bus Tracker</a></li>
                            <li><a href="/eyes">Eyes</a></li>
                            <li><a href="https://github.com/ProjectXIV/form_starter">Build a Formik Form</a></li>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                );
            case 'Project Links':
                return     <p><ul>
                            <li><a href="/pacmen">Pacmen</a></li>
                            <li><a href="/bustracker">Bus Tracker</a></li>
                            <li><a href="/eyes">Eyes</a></li>
                            <li><a href="https://github.com/ProjectXIV/form_starter">Build a Formik Form</a></li>

    </ul></p>;
            case 'Connect':
                return <p>This is Connect content.</p>;
            default:
                return <p>This page is a work in Project Links. Apologies!</p>;
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
                        <li className={activeTab === 'Project Links' ? 'active' : ''} onClick={() => this.setActiveTab('Project Links')}>Project Links</li>
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
