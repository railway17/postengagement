import { Link } from "react-router-dom";
import { Breadcrumb } from "types/global";

type BreadcrumbsProps = {
    breadcrumbs: Breadcrumb[];
};

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
    return (
        <nav
            aria-label="Breadcrumbs"
            className="breadcrumbs text-lg"
        >
            <ul className="flex items-center gap-2">
                {breadcrumbs.map((breadcrumb, index) => {
                const isLastItem = index === breadcrumbs.length - 1;

                return (
                    <li
                        key={index}
                        className="inline-flex items-center"
                    >
                    {breadcrumb.url && !isLastItem ? (
                        <Link
                            to={breadcrumb.url}
                            className="text-primary hover:underline"
                        >
                            {breadcrumb.label}
                        </Link>
                    ) : (
                        <span className="text-gray-500">{breadcrumb.label}</span>
                    )}
                </li>
                );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
