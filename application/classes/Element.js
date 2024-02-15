


class Element {
    /**
     * @type        {Object}
     * @property    {number}    left
     * @property    {number}    top
     * @property    {number}    width
     * @property    {number}    height
     */
    #styles;
    /**
     * @type {string}
     */
    #id;

    /**
     * @param   {string}    _id_
     * @param   {Object}    _styles_
     * @param   {number}    _styles_.left
     * @param   {number}    _styles_.top
     * @param   {number}    _styles_.width
     * @param   {number}    _styles_.height
     */
    constructor (_id_, _styles_) {
        this.#id            =   _id_;
        this.#styles.height =   _styles_.height;
        this.#styles.width  =   _styles_.width;
        this.#styles.left   =   _styles_.left;
        this.#styles.top    =   _styles_.top;
    }

    get styles () {
        return this.#styles;
    }
}


let al = new Element("asd",{left:10,top:10,width:10,height:30})
    al.styles