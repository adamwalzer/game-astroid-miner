export default function (props, ref, key) {
    let content = _.defaults({}, props.content);
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="welcome"
            nextButtonClassName="go-play-sprite go-button"
        >
            <skoash.Image
                className="hidden"
                src={content.frame}
            />
            <skoash.Component
                className="frame"
            >
                <skoash.Image
                    className="rat"
                    src={content.rat}
                />
                {content.copy}
            </skoash.Component>
        </skoash.Screen>
    );
}
