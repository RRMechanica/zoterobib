import { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Footer = props => {
	const { isReadOnly } = props;

	return (
		<footer>
			{ !isReadOnly &&
				<nav className="social-nav">
					<FormattedMessage
						id="zbib.footer.follow"
						defaultMessage="Stay in touch! Follow <link>@zotero</link> on Mastodon."
						values={ {
							link: chunk => <a href="https://fosstodon.org/@zotero" rel="me noopener noreferrer">{ chunk }</a>
						} }
					/>
				</nav> }
			<small className="copyright">
				<ul>
					<li>© 2018–2025 Zotero</li>
					{isReadOnly && (
						<li><a href="https://fosstodon.org/@zotero" rel="me noopener noreferrer">@zotero</a></li>
					)}
					<li><a href="/faq#privacy">Privacy</a></li>
				</ul>
			</small>
		</footer>
	);
};

Footer.propTypes = {
	isReadOnly: PropTypes.bool,
};

export default memo(Footer);
