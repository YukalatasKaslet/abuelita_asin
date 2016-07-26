get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
  # Visita app/views/index.erb
end


post '/abuelita' do
  user_input = params[:user_input]

  if user_input == "BYE"
    redirect to('/?abuelita="Bye m\'ijito,TQM"')
  elsif user_input == user_input.upcase
    redirect to('/?abuelita="NO, NO DESDE 1983"')
  elsif user_input == user_input.downcase
    redirect to('/?abuelita="HUH?! NO TE ESCUCHO, HIJO!"')
  
  end

end

