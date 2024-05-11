/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the className name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [buttonText, setButtonText] = useState("Contact");

	return (
		<div {...useBlockProps()}>
			<img
				src="http://wordcamp-sylhet-2024.local/wp-content/uploads/2024/05/profile.jpg"
				alt="John"
			/>
			<RichText
				tagName="h1"
				placeholder="Enter title"
				value={attributes.title}
				onChange={(title) => setAttributes(title)}
				allowedFormats={["core/bold"]}
			/>
			<p className="title">CEO & Founder, Example</p>
			<p>Harvard University</p>
			<p>
				<button onClick={() => setButtonText("Save")}>{buttonText}</button>
			</p>
		</div>
	);
}
