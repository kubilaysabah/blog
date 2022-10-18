// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Article } from '@/types'

const Mock = {
	categories: ['Travel', 'Health'],
	image: '/banner.jpg',
	content: (
		<React.Fragment>
			<article>
				<p>
					{'What sets Ghost apart from other products is that you can publish content and grow your audience using the same platform. Rather than just endlessly posting and hoping someone is listening, you can track real signups against your work and have them subscribe to be notified of future posts. The feature that makes all this possible is called Portal.'}
				</p>
				<p>
					{'Portal is an embedded interface for your audience to sign up to your site. It works on every Ghost site, with every theme, and for any type of publisher.'}
				</p>
				<p>
					{'You can customize the design, content and settings of Portal to suit your site, whether you just want people to sign up to your newsletter — or you\'re running a full premium publication with user sign-ins and private content.'}
				</p>
				<p>
					{'Once people sign up to your site, they\'ll receive an email confirmation with a link to click. The link acts as an automatic sign-in, so subscribers will be automatically signed-in to your site when they click on it. There are a couple of interesting angles to this:'}
				</p>
				<p>
					{'Because subscribers are automatically able to sign in and out of your site as registered members: You can (optionally) restrict access to posts and pages depending on whether people are signed-in or not. So if you want to publish some posts for free, but keep some really great stuff for members-only, this can be a great draw to encourage people to sign up!'}
				</p>
				<p>
					{'Ghost members sign in using email authentication links, so there are no passwords for people to set or forget. You can turn any list of email subscribers into a database of registered members who can sign in to your site. Like magic.'}
				</p>
				<p>
					{'Portal makes all of this possible, and it appears by default as a floating button in the bottom-right corner of your site. When people are logged out, clicking it will open a sign-up/sign-in window. When members are logged in, clicking the Portal button will open the account menu where they can edit their name, email, and subscription settings.'}
				</p>
				<p>
					{'The floating Portal button is completely optional. If you prefer, you can add manual links to your content, navigation, or theme to trigger it instead.'}
				</p>
			</article>
		</React.Fragment>
	),
	name: 'Building your audience with subscriber signups',
	description: 'What sets Ghost apart from other products is that you can publish content and grow your audience using the same platform. Rather than just endlessly posting and hoping someone is listening, you can track real signups against your work and have them subscribe to be notified of future posts. The feature that makes all this possible is called Portal.',
	createdAt: 'September 25, 2022',
	updatedAt: new Date().toString(),
	author: {
		name: 'Jonathan Doe',
		image: '/@.webp'
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Article[]>
) {
	res.status(200).json([Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock, Mock,Mock, Mock])
}
