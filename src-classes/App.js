class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let wordD
        if (this.state.isLoggedIn) {
            wordD = "in"
        } else {
            wordD = "out"
        }
        return (
        <div>
            <h1>You are currently logged {wordD}</h1>
        </div>
        )
    }
}

export default App
