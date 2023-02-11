export const REQ_STATUS = {
	all: "all",
	pending: "pending",
	approved: "approved",
	declined: "declined",
	delivered: "delivered",
};

export const ROLES = {
	admin: 0,
	accountant: 1,
	siteManager: 2,
};

export const STAT_COLORS = {
	[REQ_STATUS.approved]: "green",
	[REQ_STATUS.pending]: "orange",
	[REQ_STATUS.declined]: "red",
	[REQ_STATUS.delivered]: "blue",
};
