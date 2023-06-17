// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNav = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNav = () => {
        onToggleShowRightNavbar()
      }

      return (
        <>
          <h1>Layout</h1>

          <input
            type="checkBox"
            id="content"
            checked={showContent}
            onChange={onChangeContent}
          />
          <label htmlFor="content">Content</label>

          <br />
          <input
            type="checkBox"
            id="leftNavbar"
            checked={showLeftNavbar}
            onChange={onChangeLeftNav}
          />
          <label htmlFor="leftNavbar">left Navbar</label>
          <br />

          <input
            type="checkBox"
            id="rightNavbar"
            checked={showRightNavbar}
            onChange={onChangeRightNav}
          />
          <label htmlFor="rightNavbar">Right Navbar</label>
          <br />
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
