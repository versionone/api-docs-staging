import React from 'react'

const [YAML, JSON] = ['yaml', 'json'];

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            lang:  JSON
        }
    }

    handler = lang => () => {
        this.setState({
            lang,
        })
    }

    render() {
        const samples = this.props.samples.reduce((state, item) => ({ [item.filename.slice(0, -3)]: item, ...state}), {});
        const lang = this.state.lang;
        const isJson = lang === JSON;

        const codeBlock = (
            <div class={lang}>
                <div dangerouslySetInnerHTML={{ __html: (isJson ? samples[JSON] : samples[YAML]).html }} />
            </div>
        )

         return (
            <div>
                <button disabled={isJson} onClick={this.handler(JSON)}>JSON</button>
                <button disabled={!isJson} onClick={this.handler(YAML)}>YAML</button>
                {codeBlock}
            </div>
        )
    }
}