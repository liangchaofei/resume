export const config = {
    avatar: [
        {
            type: "theme",
            label: "主题",
            value: "theme",
        },
        {
            type: "input",
            label: "头像",
            value: "url",
        },
        {
            type: "switch",
            label: "显示",
            value: "display",
        },
        {
            type: "switch",
            label: "圆形头像",
            value: "circle",
        },
    ],
    profile: [
        {
            type: "input",
            label: "姓名",
            value: "name",
        },
        {
            type: "textarea",
            label: "简介",
            value: "about",
        },
        {
            type: "input",
            label: "手机",
            value: "mobile",
        },
        {
            type: "input",
            label: "email",
            value: "email",
        },
        {
            type: "input",
            label: "github",
            value: "github",
        },
        {
            type: "input",
            label: "主页",
            value: "home",
        },
        {
            type: "number",
            label: "工作经验",
            value: "workExpYear",
        },
        {
            type: "input",
            label: "工作地点",
            value: "workPlace",
        },
        {
            type: "input",
            label: "职位",
            value: "positionTitle",
        },
    ],
    educationList: [
        {
            type: "input",
            label: "学校",
            value: "school",
        },
        {
            type: "range",
            label: "时间",
            value: "time",
        },
        {
            type: "input",
            label: "专业",
            value: "major",
        },
        {
            type: "input",
            label: "学位",
            value: "degree",
        },
    ],
    skillList: [
        {
            type: "input",
            label: "名称",
            value: "name",
        },
        {
            type: "number",
            label: "熟练度",
            value: "level",
        },
        {
            type: "textarea",
            label: "描述",
            value: "desc",
        },
    ],
    workExpList: [
        {
            type: "input",
            label: "公司名称",
            value: "company",
        },
        {
            type: "input",
            label: "部门",
            value: "department",
        },
        {
            type: "range",
            label: "时间",
            value: "time",
        },
        {
            type: "textarea",
            label: "工作描述",
            value: "desc",
        },
    ],
    projectList: [
        {
            type: "input",
            label: "项目名称",
            value: "name",
        },
        {
            type: "input",
            label: "担任角色",
            value: "role",
        },
        {
            type: "range",
            label: "时间",
            value: "time",
        },
        {
            type: "textarea",
            label: "项目描述",
            value: "desc",
        },
        {
            type: "textarea",
            label: "项目难点",
            value: "content",
        },
    ],
    awardList: [
        {
            type: "textarea",
            label: "信息",
            value: "info",
        },
        {
            type: "input",
            label: "时间",
            value: "time",
        },
    ],
};

export const themes = [
    {
        key: "1",
        name: "墨绿",
        primaryColor: "#084c41",
        secondaryColor: "#B1D0E0",
    },

    {
        key: "2",
        name: "山吹",
        primaryColor: "#f48a00",
        secondaryColor: "#fff8e6",
    },
    {
        key: "3",
        name: "蓝莹",
        primaryColor: "#5c9dff",
        secondaryColor: "#dbeafe",
    },
    {
        key: "4",
        name: "凝夜紫",
        primaryColor: "#B983FF",
        secondaryColor: "#F3F1F5",
    },
    {
        key: "5",
        name: "绿意",
        primaryColor: "#35b378",
        secondaryColor: "rgba(127, 226, 159, 0.48)",
    },
    {
        key: "6",
        name: "极客黑",
        primaryColor: "#141E27",
        secondaryColor: "#E0DDAA",
    },
];
