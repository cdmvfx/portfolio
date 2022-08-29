import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const ResumePDF = () => {

	return (
		<Document file="/files/Carlos Montero Resume.pdf">
			<Page pageNumber={1} />
		</Document>
	)
}

export default ResumePDF