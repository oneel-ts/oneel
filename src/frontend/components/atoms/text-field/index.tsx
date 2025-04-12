import React, {Fragment} from "react";
import styles from "./text-field.module.css"
import classNames from "classnames";

type Props = {
    label: any
    title?: boolean
}

const TextField = ({label, title = true}: Props) => {
    return <Fragment>
        <div className={classNames({
            [styles.labelTittle]: title == true,
            [styles.labelText]: title == false,
        })}
        >{label}</div>
    </Fragment>
}
export default TextField;