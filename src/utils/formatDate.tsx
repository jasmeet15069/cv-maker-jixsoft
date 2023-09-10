import { parse, format } from "date-fns";

const formatDate = (dateString: string) => {
    const parsedDate = parse(dateString, "yyyy-MM-dd", new Date());
    const formattedDate = format(parsedDate, "MMM yyyy");

    return formattedDate;
};

export default formatDate;
