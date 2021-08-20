import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log(" 🍴 4️⃣ 🍤 Pure Component 🙍‍♂️ 🖕 ⚱️");
        return (
            <div>
                PureComponent {this.props.name}
            </div>
        )
    }
}

export default PureComp
