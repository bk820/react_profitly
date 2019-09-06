const React = require('react')

const Tag = (p) => (
    <div className="icon">
        <svg width="32px" height="33px" viewBox="0 0 32 33">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={p.fill} fillRule="nonzero">
                    <path d="M30.3533572,14.5771258 L17.4230406,1.64669684 C16.3686175,0.59236019 14.9385741,0 13.4474557,0 L5.62230047,0 C2.51718966,0 0,2.51718966 0,5.62230047 L0,13.9128885 C0,15.4165037 0.602336751,16.8574568 1.67231579,17.9138675 L14.4512987,30.5301973 C16.6509926,32.7018134 20.1911975,32.6904201 22.3768683,30.5046908 L30.3533572,22.5282019 C32.5488809,20.3325293 32.5488809,16.7727985 30.3533572,14.5771258 Z M8.5471711,8.54702117 C7.74319618,9.35102668 6.53406195,9.59155636 5.48359398,9.15644998 C4.433126,8.7213436 3.74819967,7.69628945 3.74819967,6.55927558 C3.74819967,5.42226172 4.433126,4.39720757 5.48359398,3.96210119 C6.53406195,3.52699481 7.74319618,3.76752449 8.5471711,4.57152999 C9.64494315,5.6693438 9.64494315,7.44920737 8.5471711,8.54702117 Z"></path>
                </g>
            </g>
        </svg>
    </div>
)

module.exports = Tag