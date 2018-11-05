/**
 * Created by ignat on 03-Jan-17.
 */

let MemberModel = require('./../models/membermodel');
let Fungsi = require('../utils/AllFunction');
let fixvalue = require('./../utils/fixvalue.json');

let ctrlMemberData = function(req, res)
{
	req.getConnection(function (err, conn)
	{
		if(err)
			res.status(fixvalue.Code.Error).json(Fungsi.SQLFailed());
		else
		{
			MemberModel.RegistrationData(conn, function (err, results)
			{
				if(err)
					res.status(fixvalue.Code.NotSuccess).json(Fungsi.RegistrationDataFailed());
				else
				{
					if(results.length > 0)
						res.status(fixvalue.Code.OK).json(Fungsi.RegistrationDataSuccess(results));
					else
						res.status(fixvalue.Code.NotSuccess).json(Fungsi.RegistrationDataEmpty());
				}
			});
		}
	});
};

module.exports = {getMemberData : ctrlMemberData};
