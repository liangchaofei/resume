import React, { useCallback, useContext } from "react";
import { Tabs } from "antd";
import debounce from "lodash.debounce";
import { FormCreator, FormListCreator } from "./FormCreator";
import { ResumeContext } from "../../context";
import { config } from "./config";


const Editor = () => {
    const { state, dispatch } = useContext(ResumeContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleSave = useCallback(
        debounce((value) => {
            dispatch({
                type: "save",
                payload: value,
            });
        }, 1000),
        []
    );
    const handleChange = (value: any, immediately?: boolean) => {
        if (immediately) {
            dispatch({
                type: "save",
                payload: value,
            });
        } else {
            handleSave(value);
        }
    };

    const items = [
        {
            key: '1',
            label: '头像设置',
            children: <FormCreator
                config={config.avatar}
                name="avatar"
                value={state.avatar}
                onChange={handleChange}
            />
        },
        {
            key: '2',
            label: '基本信息',
            children: <FormCreator
                config={config.profile}
                name="profile"
                value={state.profile}
                onChange={handleChange}
            />
        },
        {
            key: '3',
            label: '教育背景',
            children: <FormListCreator
                name="educationList"
                config={config.educationList}
                value={state}
                onChange={handleChange}
            />
        },
        {
            key: '4',
            label: '专业技能',
            children: <FormListCreator
                name="skillList"
                config={config.skillList}
                value={state}
                onChange={handleChange}
            />
        },
        {
            key: '5',
            label: '工作经历',
            children: <FormListCreator
                name="workExpList"
                config={config.workExpList}
                value={state}
                onChange={handleChange}
            />
        },
        {
            key: '6',
            label: '项目经历',
            children: <FormListCreator
                name="projectList"
                config={config.projectList}
                value={state}
                onChange={handleChange}
            />
        },
        {
            key: '7',
            label: '更多信息',
            children: <FormListCreator
                name="awardList"
                config={config.awardList}
                value={state}
                onChange={handleChange}
            />
        }
    ]

    return (
        <div>
            <Tabs tabPosition="left" defaultActiveKey="1" type="line" items={items} />
        </div>
    )
}

export default Editor;

