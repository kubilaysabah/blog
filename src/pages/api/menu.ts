// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Menu } from '@/types'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Menu[]>
) {
	res.status(200).json([
		{
			url: '/',
			text: 'Home',
		},
		{
			url: '/membership',
			text: 'Membership',
		},
		{
			url: '/style-guide',
			text: 'Style Guide',
		},
		{
			url: '/tag',
			text: 'Tag',
		},
		{
			url: '/more',
			text: 'More',
		},
	])
}
