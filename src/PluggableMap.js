export default function PluggableMap(props) {


  /**
   * Set the target element to render this map into.
   * @param {HTMLElement|string|undefined} target The Element or id of the Element
   *     that the map is rendered in.
   * @observable
   * @api
   */
  function setTarget(target) {
    this.set(MapProperty.TARGET, target);
  }

  /**
   * Set the view for this map.
   * @param {View} view The view that controls this map.
   * @observable
   * @api
   */
  function setView(view) {
    this.set(MapProperty.VIEW, view);
  }

  /**
   * Force a recalculation of the map viewport size.  This should be called when
   * third-party code changes the size of the map viewport.
   * @api
   */
  function updateSize() {
    const targetElement = this.getTargetElement();

    if (!targetElement) {
      this.setSize(undefined);
    } else {
      const computedStyle = getComputedStyle(targetElement);
      this.setSize([
        targetElement.offsetWidth -
            parseFloat(computedStyle['borderLeftWidth']) -
            parseFloat(computedStyle['paddingLeft']) -
            parseFloat(computedStyle['paddingRight']) -
            parseFloat(computedStyle['borderRightWidth']),
        targetElement.offsetHeight -
            parseFloat(computedStyle['borderTopWidth']) -
            parseFloat(computedStyle['paddingTop']) -
            parseFloat(computedStyle['paddingBottom']) -
            parseFloat(computedStyle['borderBottomWidth'])
      ]);
    }
  }
}
}