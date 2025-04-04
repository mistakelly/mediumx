import React from "react";
type TCategories = {
  id: string;
  name: string;
  emoji: string;
}[];

interface RenderCategorieProps {
  categories: TCategories | undefined;
  handleClick: (e: React.MouseEvent) => Promise<void>;
}

import { fetchData, submitData } from "@/services/submit";
import "@/styles/public/choose_story_category.scss";
import { BASEURL } from "@/constants";
import { useNavigate } from "react-router-dom";

export const fetchCategories = () => {
  const url = `${BASEURL}/stories/get_categories`;
  const accessToken = localStorage.getItem("access");
  const [categories, setCatgory] = React.useState<TCategories>();

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchData<TCategories>(url, accessToken);

        setCatgory(data);
      } catch (err) {
        console.log("error fetching categories", err);
      }
    };
    fetchCategories();
  }, []);

  return categories;
};

const RenderCategories = React.forwardRef<
  HTMLUListElement,
  RenderCategorieProps
>(({ categories, handleClick }, ref) => {
  const storyCategories = categories?.map((category) => (
    <button
      key={category.id}
      data-category-id={category.id}
      onClick={handleClick}
      className="btns category-ul__btns"
    >
      <span>{category.emoji}</span>
      {category.name}
    </button>
  ));

  return (
    <div className="category-content">
      <ul className="category-ul" ref={ref}>
        {categories && storyCategories}
      </ul>
    </div>
  );
});

export const SelectStoryCategory = () => {
  const accessToken = localStorage.getItem("access");
  const [categoryIdSet, setCategoryIdSet] = React.useState(new Set<string>());
  const navigate = useNavigate();

  //   refs
  const categoryUlRef = React.useRef<HTMLUListElement | null>(null);

  //   fetch categories
  const categories = fetchCategories();

  //   Responsible for selecting categories
  const handleClick = async (e: any) => {
    const clickedCategory = e.currentTarget;
    clickedCategory.classList.toggle("selected");
    const categoryId = e.currentTarget.getAttribute("data-category-id");

    // On click check if id already exist in set
    // if it does remove the id meaning the user deselected the category
    //  else add it back.
    setCategoryIdSet((prev) => {
      const newSet = new Set(prev);
      newSet.has(categoryId)
        ? newSet.delete(categoryId)
        : newSet.add(categoryId);
      return newSet;
    });
  };

  const disableCategoryButtons = () => {
    React.useEffect(() => {
      if (!categoryUlRef.current) {
        throw new Error(
          "Failed to render component: categoryUlRef.current is null. Make sure the ref is properly attached to a DOM element."
        );
      }
      const buttons = categoryUlRef.current.children;

      //    Filter out buttons that have not been selected
      const nonSelectedButtons = Array.from(buttons).filter(
        (button) => !categoryIdSet.has(button.getAttribute("data-category-id")!)
      );

      //   Toggle button clickability only for those that have not been selected
      Array.from(nonSelectedButtons).forEach(
        (button) =>
          ((button as HTMLButtonElement).disabled = categoryIdSet.size >= 5)
      );
    }, [categoryIdSet.size >= 5]);
  };

  disableCategoryButtons();

  const handleSubmit = async () => {
    try {
      await submitData(
        `${BASEURL}/auth/set_user_preference/`,
        "POST",
        {
          category_ids: Array.from(categoryIdSet),
        },
        accessToken
      );

      // navigate to home if everything is successful and that is the start of the application.
      navigate("/home");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <section className="category-section">
      <div className="category-section__header">
        <h1>Choose Your Interests</h1>
        <p>
          Select your interests to personalize your feed! Choose a minimum of 2
          and a maximum of 5 categories that match your preferences. <br /> This
          will help us deliver stories tailored just for you. Don’t worry, you
          can always update or change your preferences later in the settings!
        </p>
      </div>
      <RenderCategories
        categories={categories}
        handleClick={handleClick}
        ref={categoryUlRef}
      />
      <div className="category-cta">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={categoryIdSet.size < 2}
        >
          submit
        </button>
      </div>
    </section>
  );
};

export const InputComponent = ({
  name,
  placeholder,
  type,
  icon,
  imgAlt,
}: {
  name: string;
  placeholder: string;
  type: string;
  icon: string;
  imgAlt: string;
}) => {
  return (
    <div className="inputDiv">
      <img src={icon} alt={imgAlt} />
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
