import { createFromIconfontCN } from "@ant-design/icons"
import classNames from "classnames"
import './index.less'
const BaseWrapper = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3590685_lntfaedtqw.js",
})
const IconFont = (props) => {
  const { type, size = 12, color, theme, style, className, ...others } = props
  const inileStyle = {fontSize: size ,color:color, ...style }

  // @ts-ignore
  return <BaseWrapper type={type}  {...others}  style={inileStyle} className={classNames("phylum-iconfont", `${className||''}`)}></BaseWrapper>
}

export default IconFont
