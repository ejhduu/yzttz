import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "永雏塔菲弹幕站",
		imgurl: "https://danmakus.meowers.me/favicon.ico",
		desc: "永雏塔菲直播间弹幕站",
		siteurl: "https://danmakus.meowers.me/",
		tags: ["永雏塔菲", "弹幕站"],
		weight: 100,
		enabled: true,
	},
	{
		title: "永雏塔菲百科",
		imgurl: "https://aka.doubaocdn.com/s/q4fw1wgHlo",
		desc: "永雏塔菲百科，世界第一可爱！",
		siteurl: "https://acetaffy.org",
		tags: ["永雏塔菲", "百科"],
		weight: 99,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
