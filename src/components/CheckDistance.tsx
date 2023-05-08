    //Used to check the distance between the bottom of the 
    //child element (the dropdown component) and the bottom of this component
    //If there is not enough space, it tells the dropdown component to 
    //display it's list of exercise above and not below.
    export const checkDistance = (parentRef: any, childRef: any) => {
        const parentBottom: any = parentRef.current != null && parentRef.current.getBoundingClientRect().bottom;
        const childBottom: any = childRef.current != null && childRef.current.getBoundingClientRect().bottom;
        const distance = parentBottom - childBottom;

        let result: string = distance >= 120 ? "bottom" : "top";

        return result;
    };