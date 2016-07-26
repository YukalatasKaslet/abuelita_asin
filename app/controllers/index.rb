get '/' do
  @abuelita = params[:abuelita]
  
  erb :index
  # Visita app/views/index.erb
end


post '/abuelita' do
  user_input = params[:user_input]

  if request.xhr?
    #respond to Ajax request
    if user_input == "BYE"
      "Bye m\'ijito,TQM"
    elsif user_input == user_input.upcase
      "NO, NO DESDE 1983"
    elsif user_input == user_input.downcase
      "HUH?! NO TE ESCUCHO, HIJO!"
    
    end

  else
    #respond to normal request
    if user_input == "BYE"
      redirect to('/?abuelita="Bye m\'ijito,TQM"')
    elsif user_input == user_input.upcase
      redirect to('/?abuelita="NO, NO DESDE 1983"')
    elsif user_input == user_input.downcase
      redirect to('/?abuelita="HUH?! NO TE ESCUCHO, HIJO!"')
    
    end
  end

end

