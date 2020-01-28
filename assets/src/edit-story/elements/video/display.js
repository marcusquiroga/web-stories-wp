/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ElementFillContent } from '../shared';
import { getBackgroundStyle } from './util';

const Element = styled.video`
	${ ElementFillContent }
`;

function VideoDisplay( {
	autoPlay,
	mimeType,
	src,
	isBackground,
	...rest
} ) {
	let style = {};
	if ( isBackground ) {
		const styleProps = getBackgroundStyle();
		style = {
			...style,
			...styleProps,
		};
		autoPlay = true;
	}

	return (
		<Element autoPlay={ autoPlay } { ...rest } style={ { ...style } } >
			<source src={ src } type={ mimeType } />
		</Element>
	);
}

VideoDisplay.propTypes = {
	autoPlay: PropTypes.bool,
	controls: PropTypes.bool,
	isBackground: PropTypes.bool,
	loop: PropTypes.bool,
	mimeType: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	style: PropTypes.object,
};

export default VideoDisplay;
