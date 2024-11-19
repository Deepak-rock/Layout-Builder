// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-controller-container">
          <div className="configuration-container">
            <h1 className="layout">Layout</h1>
            <div className="configuration-options">
              <div className="option-container">
                <input
                  checked={showContent}
                  type="checkbox"
                  id="content"
                  onChange={onChangeShowContent}
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="option-container">
                <input
                  checked={showLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeShowLeftNavbar}
                />
                <label className="label" htmlFor="leftNavbar">
                  Left Navbar
                </label>
              </div>
              <div className="option-container">
                <input
                  checked={showRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeShowRightNavbar}
                />
                <label className="label" htmlFor="rightNavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
