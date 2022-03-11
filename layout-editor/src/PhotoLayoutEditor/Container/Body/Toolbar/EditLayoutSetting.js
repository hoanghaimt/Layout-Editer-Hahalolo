import React from 'react';
import $ from 'jquery/dist/jquery.slim';
import ColorPicker from 'react-simple-colorpicker';
import className from 'classnames';


class EditLayoutSetting extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			...props.defaultSetting,
			...props.setting,
			popup_bgColor: false,
		};
	}

	activeBgColorPopup(sw, e)
	{
		const { state } = this;
		const cTarget = e ? e.currentTarget : null;

		sw = sw || !state.popup_bgColor;

		if (sw)
		{
			$(document).on('click.pleEditBgColor', (e) => {
				if ($(e.target).closest('.ple-edit-bgColor__popup').length) return;
				if (!(e.target === cTarget) && !(e.target.parentNode === cTarget))
				{
					this.activeBgColorPopup(false);
				}
			});
		}
		else
		{
			$(document).off('click.pleEditBgColor');
		}

		this.setState({ popup_bgColor: sw });
	}

	_submit(e)
	{
		e.preventDefault();
		this.props.submit(this.state);
	}

	_reset()
	{
		this.setState({
			...this.props.defaultSetting
		});
	}

	_change(e)
	{
		let value = e.target.value || '';
		switch(e.target.type) {
			case 'text':
				this.setState({ [e.target.name]: value });
				break;
			case 'number':
				value = value || 0;
				this.setState({ [e.target.name]: parseInt(value) });
				break;
		}
	}

	_openBgColorPicker(e)
	{
		e.persist();
		this.activeBgColorPopup(null, e);
	}

	render()
	{
		const { state, props } = this;

		return (
			<form onSubmit={(e) => this._submit(e)} className="ple-edit-setting">
				<fieldset className="ple-edit-setting__form">
					<legend>Settings form</legend>
					<h1 className="ple-edit-setting__title">Settings</h1>
					<dl>
						<dt><label htmlFor="frm_width">Width</label></dt>
						<dd className="ple-type-input">
							<input
								type="number" name="width" id="frm_width"
								min={1} max={999} maxLength={3}
								value={state.width}
								onChange={(e) => this._change(e)}
								style={{ width: '72px' }}
								required/>
							<span>px</span>
						</dd>
					</dl>
					<dl>
						<dt><label htmlFor="frm_height">Height</label></dt>
						<dd className="ple-type-input">
							<input
								type="number" name="height" id="frm_height"
								min={1} max={999}
								value={state.height}
								onChange={(e) => this._change(e)}
								style={{ width: '72px' }}
								required/>
							<span>px</span>
						</dd>
					</dl>
					<dl>
						<dt><label htmlFor="frm_column">Column</label></dt>
						<dd className="ple-type-input">
							<input
								type="number" name="column" id="frm_column"
								min={1} max={99}
								value={state.column}
								onChange={(e) => this._change(e)}
								style={{ width: '54px' }}
								required />
							<span>ea</span>
						</dd>
					</dl>
					<dl className="ple-type-input">
						<dt><label htmlFor="frm_outerMargin">Outer margin</label></dt>
						<dd>
							<input
								type="number" name="outerMargin" id="frm_outerMargin"
								min={0} max={500}
								value={state.outerMargin}
								onChange={(e) => this._change(e)}
								style={{ width: '58px' }}
								required />
							<span>px</span>
						</dd>
					</dl>
					<dl className="ple-type-input">
						<dt><label htmlFor="frm_innerMargin">Inner margin</label></dt>
						<dd>
							<input
								type="number" name="innerMargin" id="frm_innerMargin"
								min={0} max={500}
								value={state.innerMargin}
								onChange={(e) => this._change(e)}
								style={{ width: '58px' }}
								required />
							<span>px</span>
						</dd>
					</dl>
					<dl>
						<dt><label htmlFor="frm_bgColor">Bg color</label></dt>
						<dd>
							<div className="ple-edit-bgColor">
								<span className={className('ple-edit-bgColor__inputBox', {
									'ple-edit-bgColor__inputBox-active': state.popup_bgColor
								})}>
									<input
										type="text"
										name="bgColor"
										id="frm_bgColor"
										value={state.bgColor}
										onChange={(e) => this._change(e)}
										onClick={(e) => this._openBgColorPicker(e)}
										readOnly={true}
										required={true}
										className="ple-edit-bgColor__input"
									    style={{ backgroundColor: state.bgColor }}
									/>
								</span>
								{state.popup_bgColor && (
									<div className="ple-edit-bgColor__popup">
										<div className="ple-edit-bgColor__picker">
											<ColorPicker
												onChange={(color) => this.setState({ bgColor: color })}
												color={state.bgColor}/>
										</div>
									</div>
								)}
							</div>
						</dd>
					</dl>
				</fieldset>

				<nav className="ple-edit-setting__buttons">
					<span>
						<button type="button" onClick={() => this._reset()}>Reset</button>
					</span>
					<span>
						<button type="submit" className="ple-submit">Apply</button>
					</span>
				</nav>
			</form>
		);
	}

}
EditLayoutSetting.displayName = 'EditLayoutSetting';
EditLayoutSetting.defaultProps = {
	submit: (e) => {},
	setting: null,
	defaultSetting: {
		width: 100,
		height: 100,
		column: 5,
		outerMargin: 10,
		innerMargin: 10,
		bgColor: 'rgba(255,255,255,1)',
	},
};


export default EditLayoutSetting;