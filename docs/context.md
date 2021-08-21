consider     Appcomponent
                  |
   ---------------------------------
   |              |                |
   A              B                C
                  |                |
                  D                E
                                   |
                                   F
A,D,F are supposed to display username,it is maintained as a prop in appcomponent
so,to display,we need to pass down username as a prop
eventhougn B,C,E do not need username ,we must pass username though it to reach A,D,F
**This is why context is used**
- Context provides a way to pass data through the component tree without having to pass props down manually the <br>
at every level

Problem- passing data from App.js to ComponentF.js using context
steps
1. Create the context
    import React from 'react'

    const UserContext = React.createContext()

    const UserProvider = UserContext.Provider
    const UserConsumer = UserContext.Consumer
    export {UserProvider,UserConsumer}


2. Provide a context value
    <div className="App">
      <UserProvider value='Sharath'>
      <ComponentC/>
      </UserProvider>
    </div>
3. Consume the context value
    class ComponentF extends Component {
        render() {
            return (
                <UserConsumer>
                    {
                        (username)=>{
                            return <div>Hello {username}</div>
                        }
                    }
                </UserConsumer>
            )
        }
    }


default value only be used when a component does not have a matching provider above it

contextType