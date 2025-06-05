import React, { useState } from 'react';
import axios from 'axios';

const BarcodeScanner = () => {
	const [barcode, setBarcode] = useState('');

	// 바코드가 입력될 때마다 처리
	const handleBarcodeInput = (e) => {
		const value = e.target.value;
		setBarcode(value);

		// 바코드 읽기 후 ERP로 전달
		if (value.length > 0) {
			sendBarcodeToERP(value);
		}
	};

	// ERP 서버로 바코드 데이터를 전송
	const sendBarcodeToERP = async (barcode) => {
		try {
			const response = await axios.post('http://your-erp-server/api/barcode', { barcode });
			console.log('바코드 ERP로 전송 성공:', response.data);
		} catch (error) {
			console.error('바코드 ERP로 전송 실패:', error);
		}
	};

	return (
		<div>
			<input
				type="text"
				value={barcode}
				onChange={handleBarcodeInput}
				placeholder="바코드를 스캔하세요"
				autoFocus
			/>
		</div>
	);
};

export default BarcodeScanner;
